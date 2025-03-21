import os
from PIL import Image
Image.MAX_IMAGE_PIXELS = None

def make_dir(path):
    """Custom mkdir"""
    if not os.path.exists(path):
        os.makedirs(path)


def ImageToTileset(source, dest):
    # see if directory already exists
    if not os.path.exists(source):
        print("Source image does not exist")
        return

    make_dir(dest)
    print("Exporting multiple sizes of your source image...")
    maps_path = os.path.join(dest, "maps")
    make_dir(maps_path)

    ImageToSizes(source, maps_path)
    sizes = sorted(os.listdir(maps_path))
    grid_path = os.path.join(dest, "grid")
    make_dir(grid_path)

    print("Converting each size into a Tileset...")
    for size_file in sizes:
        size = len(sizes) - int(size_file[:size_file.rfind(".")])
        print(f"Creating grid for zoom level {size}")
        source_path = os.path.join(maps_path, size_file)
        grid_done_path = os.path.join(dest, str(size))

        if os.path.exists(grid_done_path) and len(os.listdir(grid_done_path)) > 0:
            print("Grid already done")
            continue

        width = ImageToGrid(source_path, grid_path)
        folder_path = os.path.join(dest, str(size))
        make_dir(folder_path)

        print("Arranging grid into directory...")
        dest_path_sized = os.path.join(dest, str(size))
        GridToTileset(grid_path, dest_path_sized, int(width / 256))
    print("Done!")

# explort multiple sizes of a source image
def ImageToSizes(source, dest):
    print(f"Exporting {source}")
    if len(os.listdir(dest)) > 0:
        print("Already exported")
        return

    with Image.open(source) as img:
        dim = (img.width * 2, img.height * 2)
        ind = 0
        while dim[0] % 256 == 0 and dim[1] % 256 == 0:
            output_path = os.path.join(dest, f"{ind}.png")
            if os.path.exists(output_path):
                print(f"Skipping {output_path}")
                ind += 1
                dim = (dim[0] // 2, dim[1] // 2)
                continue
            print(f"Exporting size {ind}")
            resized_img = img.resize(dim, Image.NEAREST)
            resized_img.save(output_path)
            dim = (dim[0] // 2, dim[1] // 2)
            ind += 1

# split image into 256x256 sub-images
def ImageToGrid(source, dest):
    with Image.open(source) as img:
        tile_index = 0
        for y in range(0, img.height, 256):
            for x in range(0, img.width, 256):
                output_path = os.path.join(dest, f"{tile_index:06d}.png")
                if os.path.exists(output_path):
                    print(f"Skipping {output_path}")
                    tile_index += 1
                    continue
                tile = img.crop((x, y, x + 256, y + 256))
                tile.save(output_path)
                tile_index += 1
        return img.width

# arrange a folder of grid images into a tileset
def GridToTileset(source, dest, width):
    """Arrange grid images into a folder structure for tileset"""
    files = sorted(os.listdir(source))
    row = 0
    col = 0
    for f in files:
        if col == 0:
            row_dir = os.path.join(dest, str(row))
            make_dir(row_dir)
        src_path = os.path.join(source, f)
        dest_path = os.path.join(dest, str(row), f"{col}.png")
        os.rename(src_path, dest_path)
        col += 1
        if col == width:
            col = 0
            row += 1


if __name__ == "__main__":
    from sys import argv

    args = [
        [
            os.path.join("maps", one_map),
            os.path.join("public", "tilesets", one_map[:one_map.rfind(".")].lower()),
        ]
        for one_map in sorted(os.listdir("maps"))
    ]
    if len(argv) > 1:
        for arg in args:
            ImageToTileset(arg[0], arg[1])
    else:
        # Single-threaded processing for simplicity
        for arg in args:
            ImageToTileset(arg[0], arg[1])
