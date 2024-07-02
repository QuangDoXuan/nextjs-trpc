import { trpc } from "~/utils/trpc";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';

export default function Login() {
  const router = useRouter();
  const mutation = trpc.auth.login.useMutation({
    onSuccess: (res) => {
      if (res?.accessToken) {
        const cookies = new Cookies(null, { path: '/' });
        cookies.set(process.env.ACCESS_TOKEN_KEY || "accessToken", res.accessToken);
      }
      router.push('/')
    },
    onError: (error) => {
      console.log('error', error)
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    mutation.mutate({ username, password });
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold">Login</h2>
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {mutation.isPending ? 'Logging in...' : 'Login'}
          </button>
          {mutation.isError && (
            <p className="text-red-500">Error logging in. Please try again.</p>
          )}
        </form>
      </main>
    </div>
  );
}
