import { getArtists, getArtist, getShows, getShowsByArtist } from '../controllers/ticketmasterController';

jest.mock('axios', () => {
    const mockedClient: any = {
        get: jest.fn(() => ({
            data: "test_data"
        }))
    };

    return ({
        create: jest.fn(() => mockedClient)
    })
});

const errorMockedClient: any = {
    get: jest.fn(() => {throw Error()})
};

const mockedResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn((x) => x)
};

describe('Tests for ticketmaster api - getArtists', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it ('should send 200 status code when data successfully retrieved', async () => {
        await getArtists({}, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 500 status code when error is thrown', async () => {
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

    it ('should send 200 status code when data successfully retrieved', async () => {
        await getArtist(mockedRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 500 status code when error is thrown', async () => {
        await getArtist({}, mockedResponse, errorMockedClient);
        expect(mockedResponse.status).toHaveBeenCalledWith(500);
        expect(mockedResponse.json).toHaveBeenCalled();
    });
})

describe('Tests for ticketmaster api - getShows', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it ('should send 200 status code when data successfully retrieved', async () => {
        await getShows({}, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 500 status code when error is thrown', async () => {
        await getShows({}, mockedResponse, errorMockedClient);
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

    it ('should send 200 status code when data successfully retrieved', async () => {
        await getShowsByArtist(mockedRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 500 status code when error is thrown', async () => {
        await getShowsByArtist({}, mockedResponse, errorMockedClient);
        expect(mockedResponse.status).toHaveBeenCalledWith(500);
        expect(mockedResponse.json).toHaveBeenCalled();
    });
})

