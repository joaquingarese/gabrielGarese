import createImageUrlBuilder from '@sanity/image-url';
import { createPreviewSubscriptionHook, createCurrentUserHook, createClient } from 'next-sanity';

import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { ProjectConfig } from 'next-sanity';

import config from './config';

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 * */
export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config as ProjectConfig).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config as ProjectConfig);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config as ProjectConfig);

export const client = createClient(config);
