import { zodResolver } from '@hookform/resolvers/zod';
import { KolAlert, KolButton, KolForm, KolInputPassword, KolInputText } from '@public-ui/react-v19';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
	email: z.string().min(1, 'E-Mail ist erforderlich').email('Ungültige E-Mail-Adresse'),
	password: z.string().min(1, 'Passwort ist erforderlich').min(8, 'Passwort muss mindestens 8 Zeichen lang sein'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
	const formRef = useRef<HTMLKolFormElement | null>(null);

	const {
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitted },
		setValue,
		reset,
		watch,
		trigger,
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const emailValue = watch('email');
	const passwordValue = watch('password');

	const onSubmit = async (data: LoginFormData) => {
		console.log('Login-Daten:', data);
		alert(`Login erfolgreich!\nE-Mail: ${data.email}`);
	};

	const onInvalid = () => {
		setTimeout(() => {
			formRef.current?.focusErrorList();
		}, 100);
	};

	const errorList = isSubmitted
		? Object.entries(errors).map(([field, error]) => ({
				message: error?.message || 'Fehler',
				selector: `#${field}`,
			}))
		: [];

	return (
		<div style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem' }}>
			<h1 style={{ marginBottom: '2rem' }}>Login</h1>

			<KolForm
				ref={formRef}
				_on={{
					onSubmit: (event) => {
						event.preventDefault();
						void handleSubmit(onSubmit, onInvalid)();
					},
				}}
				_errorList={errorList}
			>
				<div style={{ display: 'grid', gap: '1.5rem' }}>
					<KolInputText
						id="email"
						_label="E-Mail"
						_type="text"
						_required
						_value={emailValue}
						_touched={!!errors.email}
						_msg={
							errors.email?.message
								? {
										_description: errors.email.message,
										_type: 'error',
									}
								: undefined
						}
						_icons={{
							left: {
								icon: 'codicon codicon-mail',
							},
						}}
						_on={{
							onChange: (_event, value) => {
								setValue('email', value as string);
							},
							onBlur: () => {
								void trigger('email');
							},
						}}
					/>

					<KolInputPassword
						id="password"
						_label="Passwort"
						_required
						_value={passwordValue}
						_touched={!!errors.password}
						_msg={
							errors.password?.message
								? {
										_description: errors.password.message,
										_type: 'error',
									}
								: undefined
						}
						_icons={{
							left: {
								icon: 'codicon codicon-lock',
							},
						}}
						_on={{
							onChange: (_event, value) => {
								setValue('password', value as string);
							},
							onBlur: () => {
								void trigger('password');
							},
						}}
					/>

					<div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
						<KolButton
							_label="Anmelden"
							_type="submit"
							_disabled={isSubmitting}
							_icons={{
								right: {
									icon: 'codicon codicon-sign-in',
								},
							}}
							_variant="primary"
						/>
						<KolButton
							_label="Zurücksetzen"
							_type="button"
							_variant="secondary"
							_icons={{
								left: {
									icon: 'codicon codicon-refresh',
								},
							}}
							_on={{
								onClick: () => {
									reset();
								},
							}}
						/>
					</div>
				</div>
			</KolForm>

			<KolAlert _type="info" _variant="msg" _label="Hinweis" style={{ marginTop: '2rem' }}>
				Das Passwort muss mindestens 8 Zeichen lang sein.
			</KolAlert>
		</div>
	);
};
