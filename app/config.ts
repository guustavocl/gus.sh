// Remix CAN'T read proccess.env on client side, see this: https://remix.run/docs/en/1.19.3/guides/envvars

const isClientSide = typeof window !== "undefined";

// Helper function to get environment variables based on context (client or server)
export function getEnvVariable(key: string) {
  return isClientSide ? window?.process?.env?.[key] : process.env[key];
}

// Common configuration for environments
export const NODE_ENV = getEnvVariable("NODE_ENV");
export const production = NODE_ENV === "production";

// APP URLs
export const api_url = getEnvVariable("API_URL") || "http://localhost:3000";
export const app_url = getEnvVariable("APP_URL") || "http://localhost:5173";
export const discord_user_id = getEnvVariable("DISCORD_USER_ID") || "166331543378198528";

// HTML Meta Tags
export const app_title = "Gustavo <gus.sh>";
export const app_description = "test";
export const app_metaImage = `${app_url}/meta-image.png`;

// Open Meteo Weather API
const latitude = getEnvVariable("MAP_LATITUDE") || 0;
const longitude = getEnvVariable("MAP_LONGITUDE") || 0;
export const open_meteo_url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

// Main Card Informations
export const main_card_name = getEnvVariable("MAIN_CARD_NAME") || "Gustavo";
export const main_card_description_1 = getEnvVariable("MAIN_CARD_DESCRIPTION_1") || "Description 1";
export const main_card_description_2 = getEnvVariable("MAIN_CARD_DESCRIPTION_2") || "Description 2";
export const country = "Brazil";

// Projects
const projectsEnv = getEnvVariable("PROJECTS");
export const projects = projectsEnv ? JSON.parse(projectsEnv) : [];

// Setup Specs
const setupSpecsEnv = getEnvVariable("SETUP_SPECS");
export const setupSpecs = setupSpecsEnv ? JSON.parse(setupSpecsEnv) : [];

// Social Links
export const github_url = "https://github.com/guustavocl";
export const discord_url = "https://discord.com/users/166331543378198528";
export const spotify_url = "https://open.spotify.com/user/guustavocl";
export const twitter_url = "https://twitter.com/guustavocl";
export const linkedin_url = "https://linkedin.com/in/guustavocl/";
export const website_url = "https://zoz.bio/gustavo";
export const email_url = "mailto:hello@gus.sh";
export const instagram_url = "https://instagram.com/guustavocl";
export const devto_url = "https://dev.to/guustavocl";
export const flickr_url = "https://flickr.com/photos/guustavocl";
export const lastfm_url = "https://last.fm/user/Guustavocl";
