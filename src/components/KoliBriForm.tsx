import { KolButton, KolForm, KolInputText } from '@public-ui/react-v19';
import type { FC } from 'react';
import { useState } from 'react';
import './KoliBriForm.css';

interface FormData {
	name: string;
	email: string;
	message: string;
}

export const KoliBriForm: FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	});

	const [submitted, setSubmitted] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleNameChange = (e: any) => {
		setFormData((prev) => ({
			...prev,
			name: e.target?.value || '',
		}));
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleEmailChange = (e: any) => {
		setFormData((prev) => ({
			...prev,
			email: e.target?.value || '',
		}));
	};

	const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = e.currentTarget;
		setFormData((prev) => ({
			...prev,
			message: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		setSubmitted(true);
		setTimeout(() => {
			setFormData({ name: '', email: '', message: '' });
			setSubmitted(false);
		}, 3000);
	};

	return (
		<div className="kolibri-form-container">
			<h2>KoliBri Kontaktformular</h2>

			{submitted && <div className="success-message">✓ Formular erfolgreich eingereicht!</div>}

			<KolForm onSubmit={handleSubmit} className="form-wrapper">
				<div className="form-group">
					<KolInputText id="name" _label="Name" _required={true} _value={formData.name} onChange={handleNameChange} _placeholder="Ihr Name" />
				</div>{' '}
				<div className="form-group">
					<KolInputText
						id="email"
						_label="E-Mail"
						_type="text"
						_required={true}
						_value={formData.email}
						onChange={handleEmailChange}
						_placeholder="ihre.email@example.com"
					/>
				</div>{' '}
				<div className="form-group">
					<label htmlFor="message" className="message-label">
						Nachricht
					</label>
					<textarea
						id="message"
						value={formData.message}
						onChange={handleMessageChange}
						placeholder="Ihre Nachricht hier..."
						className="message-textarea"
						required
					/>
				</div>
				<div className="form-actions">
					<KolButton _label="Absenden" _type="submit" />
					<KolButton _label="Zurücksetzen" _type="reset" _variant="secondary" onClick={() => setFormData({ name: '', email: '', message: '' })} />
				</div>
			</KolForm>

			<div className="form-info">
				<p>
					<strong>Eingegebene Daten:</strong>
				</p>
				<pre>{JSON.stringify(formData, null, 2)}</pre>
			</div>
		</div>
	);
};
