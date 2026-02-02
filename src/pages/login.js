export const loginHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">

        <div class="w-full max-w-sm bg-white rounded-xl shadow-md p-6">

            <!-- Icon -->
            <div class="flex justify-center mb-4">
                <div >
                    <p class ="text-2xl"> welcome back </p>
                </div>
            </div>

            <!-- Title -->
            <p class="text-sm text-gray-500 text-center mb-6">
                enter you credentials to access the platform
            </p>

            <!-- Form -->
            <form id="formLogin" class="space-y-4" id="form-login">

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input id="email" type="text" placeholder="e.g. John Doe"
                        class="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input id="password" type="password" placeholder="Your Password"
                        class="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>

                <button type="submit"
                    class="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-sm font-medium transition">
                    Sign in
                </button>

            </form>

            <p class="text-sm text-center text-gray-500 mt-4">
                Don’t have an account?
                <button id="btnRegister" class=" text-green-600 hover:underline">
                    Sign up
                </button>
            </p>

            <p class="text-xs text-center text-gray-400 mt-6">
                RestorApp Academic Simulation
            </p>

        </div>
    </div>`