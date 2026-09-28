/** Builds under test. Override with env BUILDS, e.g. BUILDS=2,4 */
export const BUILDS = (process.env.BUILDS ?? '2,4').split(',').map((b) => b.trim()).filter(Boolean);
