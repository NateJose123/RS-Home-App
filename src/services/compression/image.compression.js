import * as ImageManipulator from "expo-image-manipulator";

export const ImageCompressor = async (imageUri, wide, high, imageSize) => {
  //prettier-ignore
  const pictureSizes = {
    "profile": 10,
    "feed": 6,
  };

  const compressionRatio = pictureSizes[imageSize];
  console.log("about to compress", imageUri, wide, high);
  let compressedImage = await ImageManipulator.manipulateAsync(
    imageUri,
    [
      {
        resize: {
          width: wide / compressionRatio,
          height: high / compressionRatio,
        },
      },
    ],
    {
      compress: 1,
      format: ImageManipulator.SaveFormat.PNG,
    }
  );
  return compressedImage;
};
