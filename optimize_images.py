"""
Image Optimization Script for Impact Motion Website
Compresses and optimizes images to improve website performance
"""

from PIL import Image
import os
from pathlib import Path

def optimize_image(input_path, output_path, max_width=1920, quality=85):
    """
    Optimize an image by resizing and compressing it
    
    Args:
        input_path: Path to input image
        output_path: Path to save optimized image
        max_width: Maximum width in pixels
        quality: JPEG quality (1-100)
    """
    try:
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if necessary
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            
            # Calculate new dimensions
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save optimized image
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            # Get file sizes
            original_size = os.path.getsize(input_path) / 1024 / 1024  # MB
            optimized_size = os.path.getsize(output_path) / 1024 / 1024  # MB
            reduction = ((original_size - optimized_size) / original_size) * 100
            
            print(f"✓ {Path(input_path).name}")
            print(f"  Original: {original_size:.2f} MB → Optimized: {optimized_size:.2f} MB ({reduction:.1f}% reduction)")
            
    except Exception as e:
        print(f"✗ Error processing {input_path}: {str(e)}")

def optimize_all_images(images_dir):
    """Optimize all images in the directory"""
    images_path = Path(images_dir)
    
    if not images_path.exists():
        print(f"Error: Directory {images_dir} not found")
        return
    
    # Image extensions to process
    extensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']
    
    print("🖼️  Starting image optimization...\n")
    
    for img_file in images_path.iterdir():
        if img_file.suffix in extensions and not img_file.name.startswith('optimized_'):
            # Create output filename
            output_file = images_path / f"optimized_{img_file.stem}.jpg"
            
            # Different settings for different image types
            if 'logo' in img_file.name.lower() or 'icon' in img_file.name.lower():
                optimize_image(str(img_file), str(output_file), max_width=800, quality=90)
            elif any(name in img_file.name.lower() for name in ['hero', 'banner', 'pc', 'balkong']):
                optimize_image(str(img_file), str(output_file), max_width=1920, quality=80)
            else:
                optimize_image(str(img_file), str(output_file), max_width=1200, quality=85)
    
    print("\n✅ Image optimization complete!")
    print("\nNext steps:")
    print("1. Review the optimized images in assets/images/")
    print("2. If satisfied, replace original images with optimized versions")
    print("3. Update HTML files to reference the new image names")

if __name__ == "__main__":
    # Get the script's directory
    script_dir = Path(__file__).parent
    images_dir = script_dir / "public" / "images"
    
    optimize_all_images(images_dir)
