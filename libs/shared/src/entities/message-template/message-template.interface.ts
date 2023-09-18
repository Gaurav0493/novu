import {
  ChannelCTATypeEnum,
  EnvironmentId,
  IEmailBlock,
  ITemplateVariable,
  OrganizationId,
  StepTypeEnum,
  TemplateVariableTypeEnum,
} from '../../types';
import { TriggerContextTypeEnum } from '../notification-template';
import { IActor } from '../messages';

export type MessageTemplateContentType = 'editor' | 'customHtml';

export interface IMessageTemplate {
  _id?: string;
  _environmentId?: EnvironmentId;
  _organizationId?: OrganizationId;
  _creatorId?: string;
  _feedId?: string;
  _layoutId?: string;
  _parentId?: string;
  subject?: string;
  name?: string;
  title?: string;
  type: StepTypeEnum;
  contentType?: MessageTemplateContentType;
  content: string | IEmailBlock[];
  variables?: ITemplateVariable[];
  cta?: {
    type: ChannelCTATypeEnum;
    data: {
      url?: string;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action?: any;
  };
  active?: boolean;
  preheader?: string;
  senderName?: string;
  actor?: IActor;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const TemplateSystemVariables = ['subscriber', 'step', 'branding', 'tenant', 'preheader'];

// eslint-disable-next-line @typescript-eslint/naming-convention
export const SystemVariablesWithTypes = {
  subscriber: {
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    phone: 'string',
    avatar: 'string',
    locale: 'string',
    subscriberId: 'string',
  },
  step: {
    digest: 'boolean',
    events: 'array',
    total_count: 'number',
  },
  branding: {
    logo: 'string',
    color: 'string',
  },
  tenant: {
    name: 'string',
    data: 'object',
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const TriggerReservedVariables = ['tenant'];

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ReservedVariablesMap = {
  [TriggerContextTypeEnum.TENANT]: [{ name: 'identifier', type: TemplateVariableTypeEnum.STRING }],
};
