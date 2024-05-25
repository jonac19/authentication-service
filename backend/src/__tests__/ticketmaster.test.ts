import { getArtists, getArtist } from '../controllers/ticketmasterController';

jest.mock('axios', () => ({
    create: jest.fn()
}));

const mockedClient: any = {
    get: jest.fn(() => ({
        data: "test_data"
    }))
};

const mockedResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn((x) => x)
};

describe('Tests for ticketmaster api - getArtists', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        process.env.DEV_MODE = 'test';
    });

    it ('should send 200 status code when data successfully retrieved', async () => {
        await getArtists({}, mockedResponse, mockedClient);
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 500 status code when error is thrown', async () => {
        const errorMockedClient: any = {
            get: jest.fn(() => {throw Error()})
        };
        
        await getArtists({}, mockedResponse, errorMockedClient);
        expect(mockedResponse.status).toHaveBeenCalledWith(500);
        expect(mockedResponse.json).toHaveBeenCalled();
    });
})

describe('Tests for ticketmaster api - getArtist', () => {
    const mockedRequest = {
        params: {
            artistId: 'test_artist_id'
        }
    };
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        process.env.DEV_MODE = 'test';
    });

    it ('should send 200 status code when data successfully retrieved', async () => {
        await getArtist(mockedRequest, mockedResponse, mockedClient);
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 500 status code when error is thrown', async () => {
        const errorMockedClient: any = {
            get: jest.fn(() => {throw Error()})
        };
        
        await getArtist({}, mockedResponse, errorMockedClient);
        expect(mockedResponse.status).toHaveBeenCalledWith(500);
        expect(mockedResponse.json).toHaveBeenCalled();
    });
})
