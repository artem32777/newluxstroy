<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Check, Circle, Dot } from 'lucide-vue-next'
import { h, ref } from 'vue'
import { toast } from 'vue-sonner'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'

const formSchema = [
	z.object({
		fullName: z.string(),
		email: z.string().email(),
	}),
	z.object({
		password: z.string().min(2).max(50),
		confirmPassword: z.string(),
	}).refine(
		(values) => {
			return values.password === values.confirmPassword
		},
		{
			message: 'Passwords must match!',
			path: ['confirmPassword'],
		},
	),
	z.object({
		favoriteDrink: z.union([z.literal('coffee'), z.literal('tea'), z.literal('soda')]),
	}),
]

const stepIndex = ref(1)
const steps = [
	{
		step: 1,
		title: 'Помещение',
		description: 'Для какого объекта нужен дизайн-проект?',
	},
	{
		step: 2,
		title: 'Предпочтения',
		description: 'Укажите площадь объекта',
	},
	{
		step: 3,
		title: 'Контакты',
		description: 'Укажите Ваши контакты',
	},
]

function onSubmit(values: any) {
	toast('You submitted the following values:', {
		description: h('pre', { class: 'mt-2 w-[320px] rounded-md bg-neutral-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
	})
}
</script>

<template>
	<Form
		v-slot="{ meta, values, validate }"
		as=""
		keep-values
		:validation-schema="toTypedSchema(formSchema[stepIndex - 1])"
	>
		<Stepper
			v-slot="{ isNextDisabled, isPrevDisabled, nextStep, prevStep, modelValue }"
			v-model="stepIndex"
			class="mx-auto mt-10 block w-full max-w-[900px]"
		>
			<form
				@submit="(e) => {
					e.preventDefault()
					validate()

					if (stepIndex === steps.length && meta.valid) {
						onSubmit(values)
					}
				}"
			>
				<div class="flex-start flex w-full gap-2">
					<StepperItem
						v-for="(step, index) in steps"
						:key="step.step"
						v-slot="{ state }"
						class="relative flex w-full flex-col items-center justify-center"
						:step="step.step"
					>
						<StepperSeparator
							v-if="step.step !== steps[steps.length - 1].step"
							class="bg-muted group-data-[state=completed]:bg-primary absolute top-5 right-[calc(-50%+10px)] left-[calc(50%+20px)] block h-0.5 shrink-0 rounded-full"
						/>

						<StepperTrigger as-child>
							<Button
								:variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
								size="icon"
								class="z-10 shrink-0 rounded-full"
								:class="[state === 'active' && 'ring-ring ring-offset-background ring-2 ring-offset-2']"
								:disabled="state !== 'completed' && (index >= (modelValue || 0) && !meta.valid)"
							>
								<Check
									v-if="state === 'completed'"
									class="size-5"
								/>
								<Circle v-if="state === 'active'" />
								<Dot v-if="state === 'inactive'" />
							</Button>
						</StepperTrigger>

						<div class="mt-5 flex flex-col items-center text-center">
							<StepperTitle
								:class="[state === 'active' && 'text-primary']"
								class="text-sm font-semibold transition lg:text-base"
							>
								{{ step.title }}
							</StepperTitle>
							<StepperDescription
								:class="[state === 'active' && 'text-primary']"
								class="text-muted-foreground sr-only text-xs transition md:not-sr-only lg:text-sm"
							>
								{{ step.description }}
							</StepperDescription>
						</div>
					</StepperItem>
				</div>

				<div class="mx-auto mt-10 flex max-w-[400px] flex-col gap-4">
					<template v-if="stepIndex === 1">
						<FormField
							v-slot="{ componentField }"
							name="fullName"
						>
							<FormItem>
								<FormLabel>Full Name</FormLabel>
								<FormControl>
									<Input
										type="text"
										v-bind="componentField"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</FormField>

						<FormField
							v-slot="{ componentField }"
							name="email"
						>
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email "
										v-bind="componentField"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</FormField>
					</template>

					<template v-if="stepIndex === 2">
						<FormField
							v-slot="{ componentField }"
							name="password"
						>
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										v-bind="componentField"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</FormField>

						<FormField
							v-slot="{ componentField }"
							name="confirmPassword"
						>
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										v-bind="componentField"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						</FormField>
					</template>

					<template v-if="stepIndex === 3">
						<FormField
							v-slot="{ componentField }"
							name="favoriteDrink"
						>
							<FormItem>
								<FormLabel>Drink</FormLabel>

								<Select v-bind="componentField">
									<FormControl>
										<SelectTrigger class="w-full!">
											<SelectValue placeholder="Select a drink" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectGroup>
											<SelectItem value="coffee">
												Coffee
											</SelectItem>
											<SelectItem value="tea">
												Tea
											</SelectItem>
											<SelectItem value="soda">
												Soda
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						</FormField>
					</template>
				</div>

				<div class="mt-4 flex items-center justify-between">
					<Button
						:disabled="isPrevDisabled"
						variant="outline"
						size="sm"
						@click="prevStep()"
					>
						Back
					</Button>
					<div class="flex items-center gap-3">
						<Button
							v-if="stepIndex !== 3"
							:type="meta.valid ? 'button' : 'submit'"
							:disabled="isNextDisabled"
							size="sm"
							@click="meta.valid && nextStep()"
						>
							Next
						</Button>
						<Button
							v-if="stepIndex === 3"
							size="sm"
							type="submit"
						>
							Submit
						</Button>
					</div>
				</div>
			</form>
		</Stepper>
	</Form>
</template>
