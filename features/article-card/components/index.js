import dynamic from 'next/dynamic';

export default {
  headline: dynamic(() => import('./headline')),
  summary: dynamic(() => import('./summary')),
  media: dynamic(() => import('./media')),
  bullets: dynamic(() => import('./bullets')),
};
