import { personal } from '@content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { links } from 'edit-me/config/links';
import React from 'react';
import { fullName } from 'src/helpers/utils';
import ButtonLink from '../Button/ButtonLink';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-neutral-3 py-12 text-neutral-12">
      <div className="container text-center">
        {links && (
          <div className="flex justify-center">
            <div className="grid grid-flow-col gap-2">
              {links.map((link) => (
                <ButtonLink
                  className="h-12 w-12 rounded-full p-0"
                  href={link.href}
                  key={link.title}
                >
                  <span className="sr-only">
                    {personal.givenName} on {link.title}
                  </span>
                  <FontAwesomeIcon aria-hidden icon={link.icon} size="lg" />
                </ButtonLink>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6">
          Copyright ©{new Date().getFullYear()} {fullName}
        </div>
        <div>
          <a target="_blank" href={'https://darkinowls.web.app/'}>
            Previous site
          </a>
        </div>
      </div>
    </footer>
  );
};
