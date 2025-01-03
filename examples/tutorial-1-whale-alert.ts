import AnalyticsSDK from '../index';

interface AnalyticsSDKOptions {
    apiKey: string;
    solanaNodeUrl: string;
}

interface Alert {
    condition: string;
    callback: (alert: any) => void;
}

const analytics: AnalyticsSDK = new AnalyticsSDK({
    apiKey: 'your-api-key',
    solanaNodeUrl: 'https://api.mainnet-beta.solana.com'
});

const alert: Alert = {
    condition: 'whale-movement',
    callback: (alert: any) => {
        console.log('Whale alert triggered:', alert);
    }
};

analytics.setAlert(alert);