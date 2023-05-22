import { useRef, useState } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Chevron from "../../../assets/icons/rightChevron.svg";

interface CarouselProps {
  mainText: string;
  secondaryText?: string;
  data: any[];
  imageClick: () => void;
}

const mockData = [...new Array(6).keys()];
const windowWidth = Dimensions.get("window").width;
const count = 3;

const CarouselComponent = ({
  data,
  mainText,
  secondaryText,
  imageClick,
}: CarouselProps): JSX.Element => {
  const ref = useRef(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const rightButtonClick = () => {
    if (ref && ref.current.getCurrentIndex() != mockData.length - count) {
      ref.current.next();
    }
  };

  const leftButtonClick = () => {
    if (ref) {
      ref.current.prev();
    }
  };

  const swipe = (index: number) => {
    if (index >= mockData.length - count) {
      setNextDisabled(true);
      setPrevDisabled(false);
      if (index > mockData.length - count) {
        ref.current.scrollTo({
          index: mockData.length - count,
          animated: true,
        });
      }
    } else if (index === 0) {
      setPrevDisabled(true);
      setNextDisabled(false);
    } else {
      if (nextDisabled || prevDisabled) {
        setNextDisabled(false);
        setPrevDisabled(false);
      }
    }
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>{mainText}</Text>
          {!!secondaryText && (
            <Text style={styles.secondaryText}>{secondaryText}</Text>
          )}
        </View>
        <View style={styles.boxButtons}>
          <View
            style={[
              { marginRight: 15, transform: [{ rotate: "180deg" }] },
              styles.box,
              prevDisabled && styles.disabled,
            ]}
            onTouchEnd={leftButtonClick}
          >
            <Chevron
              fill={"currentColor"}
              color={prevDisabled ? "#cccccc" : "#8a182a"}
            />
          </View>
          <View
            style={[styles.box, nextDisabled && styles.disabled]}
            onTouchEnd={rightButtonClick}
          >
            <Chevron
              fill={"currentColor"}
              color={nextDisabled ? "#cccccc" : "#8a182a"}
            />
          </View>
        </View>
      </View>
      <GestureHandlerRootView>
        <View>
          <Carousel
            pagingEnabled={true}
            loop={false}
            style={{ width: windowWidth }}
            ref={ref}
            width={windowWidth / count}
            height={102}
            data={mockData}
            scrollAnimationDuration={500}
            onSnapToItem={swipe}
            renderItem={({ index }) => (
              <View
                style={{
                  width: 102,
                  flex: 1,
                  borderWidth: 1,
                  borderRadius: 5,
                  justifyContent: "center",
                  marginRight: 15,
                }}
                onTouchEnd={imageClick}
              >
                <Image style={styles.galleryImg} source={
              require("../../../assets/artBaselGallery.png")
            }/>
              </View>
            )}
          />
        </View>
      </GestureHandlerRootView>
    </View>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  mainText: {
    // fontFamily: 'Noto Sans JP',
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 27,
    color: "#333333",
  },
  secondaryText: {
    // fontFamily: 'Noto Sans JP',
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 21,
    color: "#333333",
    marginLeft: 8,
  },
  box: {
    backgroundColor: "#ffffff",
    width: 28,
    height: 28,
    borderWidth: 0.5,
    borderColor: "#e3e3e3",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  disabled: {
    opacity: 0.7,
  },
  galleryImg: {
    width: 100,
    height: 100,
  }
});
