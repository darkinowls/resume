import { PrivateField, personal } from '@content';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';

interface ContactInformationProps {
  privateInformation?: PrivateField[];
}

export const ContactInformation: React.FC<ContactInformationProps> = ({
  privateInformation,
}) => {
  return (
    <article>
      <SectionHeading icon={faIdCard} level={3} text="Contact Information" />

      <ul className="mt-2">
        <li>
          <strong>Location:</strong> {personal.location}
        </li>
        <li>
          <strong>Email:</strong> {personal.email}
        </li>
        <li>
          <strong>Telegram:</strong>{' '}
          <a target="_blank" href={'https://t.me/' + personal.telegram}>
            {'@' + personal.telegram}
          </a>
        </li>
        <li>
          <strong>Github:</strong>{' '}
          <a target="_blank" href={'https://github.com/' + personal.github}>
            {personal.github}
          </a>
        </li>

        {/* private access required */}
        {privateInformation?.map((privateField) => (
          <li className="mt-3" key={privateField.label}>
            <strong>{privateField.label}</strong>{' '}
            <div dangerouslySetInnerHTML={{ __html: privateField.body.html }} />
          </li>
        ))}
      </ul>
    </article>
  );
};
