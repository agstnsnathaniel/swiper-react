import SwiperCore, { Navigation } from "swiper";
import { Box, Button, Grid, Stack } from "@chakra-ui/react";
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
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  return (
    <Grid gap={4}>
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
  );
};

export default Home;
