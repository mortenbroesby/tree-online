/** The name of the local storage key to use when saving the current state */
export const LS_KEY = 'SAVED_STATE';

/** The key of the query string parameter to use when saving the current state */
export const QUERY_KEY = 's';

/**
 * The current schema version of the state.
 * Useful to avoid issues when updating the schema
 * in a future version of tree.nathanfriend.io.
 */
export const CURRENT_SAVED_STATE_SCHEMA_VERSION = '3';
