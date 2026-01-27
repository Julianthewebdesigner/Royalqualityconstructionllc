# Asset Setup Guide

## Overview
The project has been restructured to load all media files from the `/assets` folder. All components have been updated to reference local asset paths.

## Folder Structure
```
/assets
├── /images      - Static images (hero, about, services)
├── /videos      - Video files (optional)
├── /icons       - Custom brand icons (SVG)
```

## Required Images

To get your website fully functional, you need to add the following images to `/assets/images/`:

### 1. Hero Section
- **Filename**: `hero-background.jpg`
- **Recommended size**: 2000x1200px (or larger)
- **Description**: Main hero background image showing construction work
- **Used in**: `components/Hero.tsx:13`

### 2. About Section
- **Filename**: `team-photo.jpg`
- **Recommended size**: 1200x1500px (portrait orientation)
- **Aspect ratio**: 4:5
- **Description**: Construction team photo or professional workers
- **Used in**: `components/About.tsx:48`

### 3. Service Cards (6 images)
All service images should be 800x600px or similar landscape aspect ratio:

| Filename | Description | Used in |
|----------|-------------|---------|
| `service-remodeling.jpg` | Kitchen/bathroom remodeling | `constants.tsx:31` |
| `service-flooring.jpg` | Flooring installation | `constants.tsx:38` |
| `service-drywall.jpg` | Drywall and painting work | `constants.tsx:45` |
| `service-tile.jpg` | Custom tile work | `constants.tsx:52` |
| `service-framing.jpg` | Framing and carpentry | `constants.tsx:59` |
| `service-decks.jpg` | Decks and siding | `constants.tsx:66` |

## How to Add Images

### Option 1: Use Your Own Photos
1. Take professional photos of your work
2. Optimize them for web (use tools like TinyPNG or Squoosh)
3. Rename them according to the filenames above
4. Place them in `/assets/images/`

### Option 2: Download from Unsplash
The original URLs are commented in each README file. You can download from:
- Hero: https://images.unsplash.com/photo-1541888946425-d81bb19480c5
- Team: https://images.unsplash.com/photo-1503387762-592deb58ef4e
- Service images: See `/assets/images/README.md` for all URLs

### Option 3: Temporarily Use External URLs
If you want to test the site before adding images, you can temporarily revert to external URLs by editing the component files.

## Image Optimization Tips

1. **Compress images** before uploading (aim for < 200KB per image)
2. **Use correct dimensions** to avoid stretching/distortion
3. **Use JPEG format** for photos, PNG for graphics with transparency
4. **Test on mobile** to ensure images load quickly
5. **Consider WebP format** for better compression (browsers will fallback to JPG)

## Vite Configuration

Vite automatically serves files from the root directory, so `/assets/images/hero-background.jpg` will be accessible at the same path in your browser.

No additional configuration is needed!

## Testing Your Images

After adding images:
1. Start the dev server: `npm run dev`
2. Check browser console for any 404 errors
3. Verify all images load correctly on each page section
4. Test responsiveness on different screen sizes

## Video Support (Optional)

If you want to add video backgrounds:
1. Place video files in `/assets/videos/`
2. Update component code to use `<video>` tag instead of `<img>`
3. Provide fallback image for browsers that don't support video

## Custom Icons (Optional)

For brand-specific icons (logo, favicon):
1. Export as SVG format
2. Place in `/assets/icons/`
3. Update references in `index.html` for favicon
4. Import SVGs as React components if needed

## Need Help?

If you encounter issues:
- Check file paths match exactly (case-sensitive)
- Verify file extensions are correct (.jpg not .jpeg, etc.)
- Clear browser cache and hard refresh (Cmd/Ctrl + Shift + R)
- Check browser console for specific error messages
