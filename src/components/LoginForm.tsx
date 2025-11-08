import { zodResolver } from '@hookform/resolvers/zod';
import { KolInputEmailController, KolInputPasswordController } from '@public-ui/react-hook-form-adapter';
import { KolButton, KolForm } from '@public-ui/react-v19';
import type { FC } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
	email: z.string({ message: 'Bitte geben Sie Ihre E-Mail ein.' }).min(1, 'E-Mail ist erforderlich').email('Ungültige E-Mail-Adresse'),
	password: z
		.string({ message: 'Bitte geben Sie ein Passwort ein.' })
		.min(8, 'Passwort muss mindestens 8 Zeichen lang sein')
		.regex(/[A-Z]/, 'Passwort muss mindestens einen Großbuchstaben enthalten')
		.regex(/[a-z]/, 'Passwort muss mindestens einen Kleinbuchstaben enthalten')
		.regex(/[0-9]/, 'Passwort muss mindestens eine Zahl enthalten'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm: FC = () => {
	const formRef = useRef<HTMLKolFormElement | null>(null);

	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues,
		trigger,
	} = useForm<LoginFormData>({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onTouched',
		shouldFocusError: true,
		resolver: zodResolver(loginSchema),
	});

	const touchAndValidateAll = () => {
		const fields: Array<keyof LoginFormData> = ['email', 'password'];
		fields.forEach((name) => {
			setValue(name, getValues(name), { shouldTouch: true, shouldValidate: true });
		});
	};

	const onSubmit = (data: LoginFormData) => {
		console.log('Login erfolgreich:', data);
		alert(`Login erfolgreich!\nE-Mail: ${data.email}`);
	};

	const onError = () => {
		touchAndValidateAll();
		void trigger(undefined, { shouldFocus: true });
		formRef.current?.focusErrorList();
	};

	const errorList = Object.entries(errors)
		.filter(([, value]) => value?.message)
		.map(([key, value]) => ({
			message: value!.message as string,
			selector: `#field-${key}`, // CSS-Selektor zum Feld
		}));

	return (
		<KolForm
			className="w-full max-w-md mx-auto"
			ref={formRef}
			_errorList={errorList}
			_on={{
				onSubmit: (event) => {
					void handleSubmit(onSubmit, onError)(event as unknown as React.BaseSyntheticEvent);
				},
			}}
		>
			<div className="grid gap-4">
				<KolInputEmailController
					name="email"
					control={control}
					_label="E-Mail-Adresse"
					rules={{ required: 'E-Mail ist erforderlich' }}
					_required
					id="field-email"
				/>

				<KolInputPasswordController
					name="password"
					control={control}
					_label="Passwort"
					rules={{ required: 'Passwort ist erforderlich' }}
					_required
					id="field-password"
				/>

				<KolButton _label="Anmelden" _type="submit" _variant="primary" />
			</div>
		</KolForm>
	);
};
