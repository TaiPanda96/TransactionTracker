const ErrorMessageContainer = ({ error, message }) => {
    return (
        <div className="flex w-screen justify-center items-center">
            <div role="alert">
                <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    {message}
                </div>
                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>{error.message ? error.message : 'An error occured fetching notification(s).'}</p>
                </div>
            </div>

        </div>

    )
}

export default ErrorMessageContainer