import AnalyticsSDK from '../index';

interface AnalyticsSDKOptions {
    apiKey: string;
    solanaNodeUrl: string;
}

interface QueryTransactionsOptions {
    walletAddress: string;
}

const analytics: AnalyticsSDK = new AnalyticsSDK({
    apiKey: 'test-api-key',
    solanaNodeUrl: 'https://testnet.solana.com'
});

analytics.queryTransactions({ walletAddress: 'test-wallet' } as QueryTransactionsOptions)
    .then((data: any) => console.log('Test Query Transactions:', data));

analytics.analyzeWalletBehavior('test-wallet')
    .then((analysis: any) => console.log('Test Wallet Analysis:', analysis));