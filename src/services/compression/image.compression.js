import * as ImageManipulator from "expo-image-manipulator";

export const ImageCompressor = async (imageUri, wide, high) => {
  console.log("about to compress", imageUri, wide, high);
  let compressedImage = await ImageManipulator.manipulateAsync(
    imageUri,
    [{ resize: { width: wide / 10, height: high / 10 } }],
    {
      compress: 1,
      format: ImageManipulator.SaveFormat.PNG,
    }
  );
  return compressedImage;
};
