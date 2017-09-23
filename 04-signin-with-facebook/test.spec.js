function Auth(authService) {
    this.authService = authService

    this.signInWithFacebook = (phone, password) => {
        return this.authService(phone, password)
    }
}

test('Mock wtih 1 should return 1', () => {
    const mockFn = jest.fn(1)
        .mockReturnValue(1)

    expect(mockFn(1)).toBe(1)
    expect(mockFn).toBeCalledWith(1)
})

test('Signin with valid credential should pass', () => {
    const returnObject = {
        name: 'Weera',
        facebookId: '963852741',
        email: 'wkasetsin@gmail.com'
    }

    const mockFacbook = jest.fn('0817777777', 'abc12345')
        .mockReturnValue(returnObject)

    let app = new Auth(mockFacbook)
    let value = app.signInWithFacebook('0817777777', 'abc12345')

    expect(value).toEqual(returnObject)
    expect(mockFacbook).toBeCalled()
    expect(mockFacbook).toBeCalledWith('0817777777', 'abc12345')
})
