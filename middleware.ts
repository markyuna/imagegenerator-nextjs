import { clerkMiddleware, ClerkMiddlewareOptions } from "@clerk/nextjs/server";
 
interface CustomClerkMiddlewareOptions extends ClerkMiddlewareOptions {
  publicRoutes: string[];
}

const clerkOptions: CustomClerkMiddlewareOptions = {
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
};
 
export default clerkMiddleware(clerkOptions);
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
