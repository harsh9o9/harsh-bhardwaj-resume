# Utils Documentation

This folder contains reusable utility functions and constants for the portfolio website.

## Performance Utilities (`throttle.js`)

### `throttle(func, limit)`
Limits the rate at which a function can be called.

```javascript
import { throttle } from '@/utils';

const throttledFunction = throttle((value) => {
  console.log('This will only execute once per 100ms');
}, 100);
```

### `debounce(func, delay)`
Delays the execution of a function until after a specified delay.

```javascript
import { debounce } from '@/utils';

const debouncedSearch = debounce((query) => {
  // Search API call
}, 300);
```

### `throttleAdvanced(func, limit, options)`
Advanced throttle with leading and trailing options.

```javascript
import { throttleAdvanced } from '@/utils';

const advancedThrottle = throttleAdvanced(
  (value) => console.log(value),
  100,
  { leading: true, trailing: false }
);
```

## Animation Utilities (`animations.js`)

### `mapPrecision(value)`
Maps precision values for smooth video scrubbing.

```javascript
import { mapPrecision } from '@/utils';

const mappedValue = mapPrecision(1.234); // Returns mapped precision value
```

### `easing`
Collection of easing functions for smooth animations.

```javascript
import { easing } from '@/utils';

// Available easing functions:
// - easing.linear
// - easing.easeInCubic
// - easing.easeOutCubic
// - easing.easeInOutCubic
// - easing.easeInQuad
// - easing.easeOutQuad
// - easing.easeInOutQuad
```

### `clamp(value, min, max)`
Clamps a value between min and max.

```javascript
import { clamp } from '@/utils';

const clampedValue = clamp(150, 0, 100); // Returns 100
```

### `mapRange(value, inMin, inMax, outMin, outMax)`
Maps a value from one range to another.

```javascript
import { mapRange } from '@/utils';

const mappedValue = mapRange(50, 0, 100, 0, 1); // Returns 0.5
```

## Constants (`constants.js`)

### `SCROLL_SECTIONS`
Defines scroll timing for different sections.

```javascript
import { SCROLL_SECTIONS } from '@/utils';

const { HERO, ABOUT, WORK } = SCROLL_SECTIONS;
// HERO: { START: 0, END: 0.15, INTRO_START: 0.14, INTRO_END: 0.25 }
// ABOUT: { START: 0.3, END: 0.4 }
// WORK: { START: 0.5, END: 0.65, ... }
```

### `ANIMATION_DURATIONS`
Predefined animation duration constants.

```javascript
import { ANIMATION_DURATIONS } from '@/utils';

// Available durations:
// - ANIMATION_DURATIONS.FAST (0.2s)
// - ANIMATION_DURATIONS.NORMAL (0.5s)
// - ANIMATION_DURATIONS.SLOW (0.8s)
// - ANIMATION_DURATIONS.VERY_SLOW (1.2s)
```

### `PERFORMANCE`
Performance-related constants.

```javascript
import { PERFORMANCE } from '@/utils';

// Available constants:
// - PERFORMANCE.THROTTLE_60FPS (16ms)
// - PERFORMANCE.THROTTLE_30FPS (32ms)
// - PERFORMANCE.DEBOUNCE_DEFAULT (300ms)
```

### `VIDEO`
Video-related constants.

```javascript
import { VIDEO } from '@/utils';

// Available constants:
// - VIDEO.SPEED_MULTIPLIER (2)
// - VIDEO.DEFAULT_MARQUEE_WIDTH (800)
```

## Usage Examples

### In Components
```javascript
import { 
  throttle, 
  SCROLL_SECTIONS, 
  PERFORMANCE, 
  easing 
} from '@/utils';

// Use in scroll handlers
const throttledScrollHandler = throttle((progress) => {
  // Handle scroll
}, PERFORMANCE.THROTTLE_60FPS);

// Use in animations
const animation = useTransform(
  scrollYProgress, 
  [SCROLL_SECTIONS.HERO.START, SCROLL_SECTIONS.HERO.END], 
  [0, 1]
);
```

### Import All Utilities
```javascript
import * as Utils from '@/utils';

// Then use as:
Utils.throttle(myFunction, 100);
Utils.SCROLL_SECTIONS.HERO.START;
```
