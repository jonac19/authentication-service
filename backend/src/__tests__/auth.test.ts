import { authController } from '../controllers/authController';
import pool from '../database/pool';

jest.mock('../database/pool', () => ({
    connect: jest.fn(() => mockedClient) 
}));

jest.mock('bcrypt', () => ({
    compare: jest.fn((x, y) => x === y)
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

describe('Tests for authentication api', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it ('should send 400 status code when username is missing from request', async () => {
        const testRequest = {
            body: {
                password: 'test_password'
            }
        };

        await authController(testRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(400);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 400 status code when password is missing from request', async () => {
        const testRequest = {
            body: {
                username: 'test_username'
            }
        };

        await authController(testRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(400);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 400 status code when user does not exist', async () => {
        const mockedRow = {
            rows: []
        }

        mockedClient.query.mockResolvedValueOnce(mockedRow);
        
        await authController(mockedRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(400);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 400 status code when password is incorrect', async () => {
        const user = {
            username: 'test_username',
            password: 'different_password'
        }

        const mockedRow = {
            rows: [user]
        }

        mockedClient.query.mockResolvedValueOnce(mockedRow);

        await authController(mockedRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(400);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 200 status code when credentials are correct', async () => {
        const mockedRow = {
            rows: [mockedRequest.body]
        }

        mockedClient.query.mockResolvedValueOnce(mockedRow);

        await authController(mockedRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.json).toHaveBeenCalled();
    });

    it ('should send 500 status code when error is thrown', async () => {
        const spy = jest.spyOn(pool, 'connect');
        spy.mockImplementationOnce(jest.fn(() => {throw Error()}));
        
        await authController(mockedRequest, mockedResponse);
        expect(mockedResponse.status).toHaveBeenCalledWith(500);
        expect(mockedResponse.json).toHaveBeenCalled();
    });
});