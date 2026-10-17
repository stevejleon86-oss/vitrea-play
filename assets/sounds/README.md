# Sounds

Recordings the game plays instead of its synthesised sounds. Any sound without
a recording here keeps the synth version, so add as many or as few as you like.

1. Drop the file in this folder, named after the sound it replaces (below). Add
   `_1`, `_2`… for several takes; the game picks one at random each time.
2. Run `node scripts/sounds.ts` to update `manifest.json`.

OGG, MP3, WAV and M4A all work (OGG or MP3 keep the download small).

| File name | Plays when |
|---|---|
| `shot_rifle`, `shot_mg`, `shot_pistol`, `shot_shotgun`, `shot_sniper` | Gunfire, by kind of gun |
| `shot_cannon`, `shot_rocket`, `shot_artillery`, `shot_flame` | Heavy weapons |
| `shot_laser`, `shot_beam` | Shardbound crystal weapons (small / big) |
| `shot_<weapon>` | One weapon only, e.g. `shot_twinCannon` (names in `src/config.ts` `WEAPONS`) |
| `impact_small`, `impact_big` | A shell or rocket lands |
| `explode_small`, `explode_big` | A unit or building is destroyed |
| `engine_loop` | Looping engine rumble while vehicles move on screen |

Which weapon belongs to which family is in `WEAPON_FAMILY` in `src/samples.ts`.

## Voice lines

Voice files go here too, named as in the Vitrea Voice Script (the full list is
`VOICE_LINES` in `src/voicelines.ts`): `announcer_*`, `concord_select_1`…,
`vance_ability`, `briefing_landfall` and so on. Placeholders can be generated
with Gemini text-to-speech (`GEMINI_API_KEY` set, then `node scripts/voices.ts`);
a real recording with the same name simply replaces the placeholder.

## Credits

The `shot_laser`, `shot_beam`, `explode_*`, `impact_*` and `engine_loop`
recordings are from Kenney's Sci-Fi Sounds (CC0, see `KENNEY-LICENSE.txt`).
