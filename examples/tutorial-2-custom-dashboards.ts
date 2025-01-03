import AnalyticsSDK from '../index';

interface AnalyticsSDKOptions {
    apiKey: string;
    solanaNodeUrl: string;
}

interface QueryTransactionsOptions {
    walletAddress: string;
}

const analytics = new AnalyticsSDK({
    apiKey: 'your-api-key',
    solanaNodeUrl: 'https://api.mainnet-beta.solana.com'
});

analytics.queryTransactions({ walletAddress: 'wallet123' } as QueryTransactionsOptions)
    .then((data: any) => {
        console.log('Transaction Data:', data);
        // Export this data to a custom dashboard.
    });