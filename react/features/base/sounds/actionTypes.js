/**
 * The type of a feature internal (Redux) action to add an audio element to
 * the sounds collection state.
 * {
 *     type: _ADD_AUDIO_ELEMENT,
 *     soundId: string,
 *     ref: AudioElement
 * }
 */
export const _ADD_AUDIO_ELEMENT = Symbol('_ADD_AUDIO_ELEMENT');

/**
 * The type of feature internal (Redux) action to remove an audio element for
 * given sound identifier from the sounds collection state.
 * {
 *     type: _REMOVE_AUDIO_ELEMENT,
 *     soundId: string
 * }
 */
export const _REMOVE_AUDIO_ELEMENT = Symbol('_REMOVE_AUDIO_ELEMENT');

/**
 * The type of (Redux) action to play a sound from the sounds collection.
 * {
 *     type: PLAY_SOUND,
 *     soundId: string
 * }
 */
export const PLAY_SOUND = Symbol('PLAY_SOUND');

/**
 * The type of (Redux) action to register a new sound with the sounds
 * collection.
 * {
 *     type: REGISTER_SOUND,
 *     soundId: string
 * }
 */
export const REGISTER_SOUND = Symbol('REGISTER_SOUND');

/**
 * The type of (Redux) action to unregister an existing sound from the sounds
 * collection.
 * {
 *     type: UNREGISTER_SOUND,
 *     soundId: string
 * }
 */
export const UNREGISTER_SOUND = Symbol('UNREGISTER_SOUND');

