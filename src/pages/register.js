export const registerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">

        <div class="w-full max-w-sm bg-white rounded-xl shadow-md p-6">

            <!-- Icon -->
            <div class="flex justify-center mb-4">

            </div>

            <!-- Title -->
            <h1 class="text-xl font-semibold text-center">Create Account</h1>
            <p class="text-sm text-gray-500 text-center mb-6">
                join the academic performance platform today
            </p>

            <!-- Form -->
            <form id="form-register" class="space-y-4">

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input id="fullName" type="text" placeholder="John Doe" required
                        class="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input id="newEmail" type="email" placeholder="name@example.com" required
                        class="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input id="newPassword" type="password" placeholder="********" required
                        class="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                    </label>
                    <input id="confirmNewPassword" type="password" placeholder="********" required
                        class="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>

                <button type="submit"
                    class="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-sm font-medium transition">
                    Create Account
                </button>

            </form>

            <p class="text-sm text-center text-gray-500 mt-4">
                Already have an account?
                <button id="btnLogin" class=" text-green-600 hover:underline">
                    Sign in
                </button>
            </p>

            <p class="text-xs text-center text-gray-400 mt-6">
                RestorApp Academic Simulation
            </p>

        </div>

    </div>
`