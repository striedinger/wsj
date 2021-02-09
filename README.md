# WSJ Rendering POC

This repo is a good place to try new things when rendering (mostly) articles, with real data, to prove their feasability. 

## What you'll need

To correctly run this app, you will need an `.env` file with the following:
- ALLESSEH_ENDPOINT=https://allesseh-api.content.dowjones.io
- ALLESSEH_KEY={KEY}
- NEXT_PUBLIC_VIDEO_API=https://video-api.wsj.com

## TODO
- Fix article timestamp timezone
- Better allesseh element expansion (add related link data) logic
- Add dynamic imports where possible
