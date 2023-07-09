export const environment = {
    tenantId: `${localStorage.getItem('tenantId')}`,
    IAMSignUp:'https://ingress-gateway.gaiansolutions.com/iam-service/v1.0/tenants/signup',
    OTPVarification:'https://ingress-gateway.gaiansolutions.com/iam-service-alpha/v1.0/tenants/otp-verification',   
    IAMLogin: 'https://ingress-gateway.gaiansolutions.com/iam-service/oauth/token',
    production: false,
    weatherApi: 'https://ingress-gateway.gaiansolutions.com/tf-web/v1.0',
    TenantId: '618b6fdef5dacc0001a6b1b0',
    Schemas:'630e47f230e44f0001218074'
};