interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Service Technician'],
  tenantName: 'Provider',
  applicationName: 'AMPX',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage providers', 'Manage vehicles', 'Manage service requests'],
  getQuoteUrl: 'https://app.roq.ai/proposal/8e7ff558-59ca-45e1-917e-9d8c0c5827a1',
};
