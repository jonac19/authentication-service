import { userController } from '../controllers/userController';
import pool from '../database/pool';

jest.mock('../database/pool', () => ({
    connect: jest.fn(() => mockedClient) 
}));

jest.mock('bcrypt', () => ({
    hash: jest.fn((x) => x)
}));

const mockedRequest = {
    body: {
        username: 'test_username',
        password: 'test_password'
    }
};

const mockedResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn((x) => x)
};

const mockedClient = {
    query: jest.fn(),
    release: jest.fn()
};

describe('Tests for user api', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it ('should send 400 status code when username is missing from request', async () => {
        const testRequest = {
            body: {
                password: 'test_password'
            }
        };

        await userController(testRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(400);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 400 status code when password is missing from request', async () => {
        const testRequest = {
            body: {
                username: 'test_username'
            }
        };

        await userController(testRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(400);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 400 status code when user already exists', async () => {
        const mockedRow = {
            rows: [mockedRequest.body]
        }

        mockedClient.query.mockResolvedValueOnce(mockedRow);
        
        await userController(mockedRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(400);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 200 status code when credentials are correct', async () => {
        const mockedRow = {
            rows: []
        }

        mockedClient.query.mockResolvedValueOnce(mockedRow);

        await userController(mockedRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 500 status code when error is thrown', async () => {
        const spy = jest.spyOn(pool, 'connect');
        spy.mockImplementationOnce(jest.fn(() => {throw Error()}));
        
        await userController(mockedRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(500);
        expect(mockedResponse.json).toHaveBeenCalled();
    });
});
