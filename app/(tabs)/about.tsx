import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function About() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="information-circle" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        
        <ThemedText type="title">ABOUT</ThemedText>
      </ThemedView>
      <Collapsible title='ABOUT DATASET'>
      {/* <ThemedText type="subtitle">ABOUT DATASET</ThemedText> */}

      <Collapsible title="RAIL LAB, KNUST">
        <ThemedText>
        {`The enormous amount of data produced in the context of the fourth industrial revolution frequently does not adequately depict African situations. This disparity leads to a crucial problem: remedies drawn from such datasets frequently turn out to be ineffective when used to address problems unique to African regions. As a result, questions concerning the effectiveness of technologies created without a thorough understanding of the distinctive features of the African landscape are becoming more and more prevalent.

An innovative project has been launched to close this gap—a dataset that is categorically "Afrocentric." This unique dataset is carefully curated, concentrating only on data gathered from the various African areas. This dataset's collection of annotated photos of leaves from diverse crops, showing both healthy specimens and those affected by illnesses, is one of its main components. These pictures show the subtle symptoms of crop diseases at various phases of crop development.

The dataset's emphasis on inclusion, which makes sure that it captures the agricultural diversity found in Africa, is essential to understanding its value. The dataset offers a thorough understanding of disease patterns and manifestations by including annotated pictures of leaves from a range of crops. Researchers, data scientists, and innovators who want to create specialized and efficient solutions for the agricultural problems the African continent faces will find this wealth of knowledge to be of immeasurable use.

This "Afrocentric" dataset essentially serves as a testament to the understanding of the significance of region-specific data in promoting technological solutions that connect with the demands and complexities of Africa. Datasets of this kind open the way for more informed and contextually relevant developments as we navigate the complex convergence of technology and agriculture, ensuring that the advantages of the fourth industrial revolution are realized inclusively across various global landscapes.
        `}

        </ThemedText>
      </Collapsible>


      <Collapsible title="Plant Village">
        <ThemedText>
            {`
This dataset consists of 70,000 high-quality images of diseased and healthy plant leaves from 9 different species. Each species has 3 data splits (train, test, and validation), with consistent categories across all splits. 
        
This dataset is ideal for machine learning researchers and practitioners working on plant disease detection and classification, as well as for agricultural experts seeking to improve plant health and crop yields. 

The dataset is unique in its diversity, covering a wide range of plant species, diseases, and growth stages. With this dataset, we aim to accelerate research and development in the field of plant pathology and help farmers improve their crop health and productivity.
        `}
        </ThemedText>
      </Collapsible>


      <Collapsible title="Mango Dataset">
        <ThemedText>
            {`Description of this dataset is below: 
Number of images: 4000 images. Of these, around 1800 are of distinct leaves, and the rest
are prepared by zooming and rotating where deemed necessary.

Diseases considered: Seven diseases, namely Anthracnose, Bacterial Canker, Cutting Weevil,
Die Back, Gall Midge, Powdery Mildew, and Sooty Mould.
Number of classes: Eight (including the healthy category).

Distribution of instances: Each of the eight categories contains 500 images.
How data are acquired: Captured from mango trees through the mobile phone camera.
Data source locations: Four mango orchards of Bangladesh, namely Sher-e-Bangla Agricultural
University orchard, Jahangir Nagar University orchard, Udaypur village
mango orchard, and Itakhola village mango orchard.
`}
        </ThemedText>
        {/* <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink> */}
      </Collapsible>


      <Collapsible title="Rice Dataset">
        <ThemedText>
{`Consisted of diseased and healthy rice leaves.`}
        </ThemedText>
        {/* <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink> */}
      </Collapsible>


      <Collapsible title="Banana Dataset">
        <ThemedText>
            {`1.	Bananas are not only nutritious but also delicious. Both raw and ripe bananas are beneficial for health. It is a good source of potassium, vitamin C, vitamin B6, and dietary fiber, according to nutritional guidelines.

2.	Potassium in bananas helps regulate blood pressure and supports overall heart health. Its' dietary fiber aids digestion and helps in maintaining gastrointestinal regularity. Natural sugars like glucose, fructose, and sucrose in bananas provide quick and sustained energy.

3.	With a low glycemic index, bananas assist in keeping blood sugar levels stable. The fiber content promotes a feeling of fullness, aiding in weight management. It contains serotonin, a neurotransmitter that contributes to a good mood and stress reduction.

4.	Vitamin A in bananas supports healthy vision, and they may contribute to age-related macular degeneration prevention. The presence of magnesium and vitamin B6 in bananas helps maintain strong bones. It also contains prebiotic fiber that supports the growth of beneficial gut bacteria, contributing to a healthy digestive system.

5.	The prevalence of various diseases associated with bananas highlights the need for proper measures to be taken to mitigate their impact, which may lead to a reduction in banana production on a large scale. Therefore, adopting preventive measures as soon as symptoms of diseases are observed is crucial.

6.	Diseases in crops pose a significant challenge to agricultural production, impacting the quality and productivity of the crops. Due to environmental factors, diseases in crops can have adverse effects on both yield and quality. For instance, banana diseases can negatively impact the yield and quality of bananas, leading to significant economic losses for farmers. Traditional methods of identifying and managing crop diseases are often time-consuming, labor-intensive, inefficient, and subjective.

7.	Such classification and identification tasks have been a promising area for computer vision in recent years.

8.	A large dataset of seven different banana classes—Healthy Leaf, Bract Mosaic Virus Disease, Black Sigatoka, Insect Pest Diseases, Moko Disease, Panama Disease, and Yellow Sigatoka—is shown in order to create machine vision-based algorithms.

9.	There are 408 images of bananas in all, taken in actual fields. Then, in order to expand the number of data points, shifting, flipping, zooming, shearing, brightness enhancement, and rotation techniques are used to create a total of 2856 augmented images from these original images.
            `}
        </ThemedText>
        {/* <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink> */}
      </Collapsible>


      <Collapsible title="Orange Dataset">
        <ThemedText>
            {`This account on Kaggle provided us with dataset on diseased and healthy images of oranges.
            `}
        </ThemedText>

      </Collapsible>
      </Collapsible>

    <Collapsible title='ABOUT US'>
    <Collapsible title='About Us'>
    <ThemedText>{`Welcome to our Crop Disease Detection App! We are a team of three final year computer engineering students from KNUST, driven by a shared passion for technology and agriculture. Our goal is to bridge the gap between modern technology and traditional farming practices, providing farmers with a powerful tool to improve crop health and productivity.`}
    </ThemedText>
    </Collapsible>

    <Collapsible title='Our Team'>
    <ThemedText>{`Ignatus Anim
Ignatus is a tech enthusiast with a deep interest in machine learning and artificial intelligence. He has played a crucial role in developing and training the machine learning models that power our app. His dedication to optimizing algorithms ensures that our app delivers accurate and reliable predictions.

Yurlim Azindow 
Yurlim is our software development expert. With her strong background in mobile app development, she has been instrumental in designing and coding the app. Her attention to detail and commitment to user-friendly interfaces make our app accessible and easy to use for farmers of all tech levels.

Joel Afeku Selorm Paa Kwesi Agbemenyo 
Joel brings his expertise in data analysis and project management to the team. He has worked tirelessly on gathering and analyzing crop disease data, as well as coordinating our efforts to meet project deadlines. His organizational skills ensure that our project stays on track and meets all its objectives.`} 
    </ThemedText>
    </Collapsible>

    <Collapsible title='Mission'>
    <ThemedText>{`Our mission is to empower farmers by providing them with a reliable, easy-to-use tool to identify and manage crop diseases. By leveraging the power of machine learning and image recognition, we aim to reduce crop losses, increase yields, and ultimately contribute to global food security.`}</ThemedText>
    </Collapsible>
    </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
