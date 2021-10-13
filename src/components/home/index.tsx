/**
 * Alternative 001 references
 * - https://github.com/nolimits4web/swiper/issues/3855
 * - https://github.com/nolimits4web/swiper/issues/3855#issuecomment-829278905
 * - https://github.com/nolimits4web/swiper/issues/3855#issuecomment-847627094
 *
 * Alternative 002 references
 * - https://swiperjs.com/swiper-api#navigation
 * - https://stackoverflow.com/questions/50009818/javascript-swiper-native-navigation-function-is-not-working
 */

import SwiperCore, { Navigation } from "swiper";
import { Box, Button, Grid, Heading, Stack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Ref, useEffect, useRef, useState } from "react";

import "swiper/css";

SwiperCore.use([Navigation]);

const images = ["-G3rw6Y02D0", "JFeOy62yjXk", "GPPAjJicemU"];

const useSwiperRef = <T extends HTMLElement>(): [
  T | null | undefined,
  Ref<T>
] => {
  const [wrapper, setWrapper] = useState<T | null>(null);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      setWrapper(ref.current);
    }
  }, []);

  return [wrapper, ref];
};

const Home = () => {
  // alternative 001
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  // alternative 002
  const prevElClass = "swiper-button-prev";
  const nextElClass = "swiper-button-next";

  return (
    <Grid gap={8}>
      <Grid gap={4}>
        <Heading>Alternative 001</Heading>
        <Box maxWidth="800">
          <Swiper navigation={{ prevEl, nextEl }} slidesPerView={1}>
            {images.map((img) => (
              <SwiperSlide key={img}>
                <img src={`https://source.unsplash.com/${img}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Stack direction="row" spacing={4}>
          <Button ref={prevElRef}>Prev</Button>
          <Button ref={nextElRef}>Next</Button>
        </Stack>
      </Grid>

      <Grid>
        <Heading>Alternative 002</Heading>

        <Box maxWidth="800">
          <Swiper
            navigation={{
              prevEl: `.${prevElClass}`,
              nextEl: `.${nextElClass}`,
            }}
            slidesPerView={1}
          >
            {images.map((img) => (
              <SwiperSlide key={img}>
                <img src={`https://source.unsplash.com/${img}`} />
                <Stack direction="row" spacing={4}>
                  <Button className={prevElClass}>Prev</Button>
                  <Button className={nextElClass}>Next</Button>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
