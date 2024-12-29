class ApiError extends Error {
    constructor(statusCode, message = "An error occurred") {
        super(message); 
        this.statusCode = statusCode; 
        this.success = false; 
    }
}

export { ApiError };
