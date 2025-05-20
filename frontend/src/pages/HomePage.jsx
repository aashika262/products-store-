import React from "react";
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  return (
    <Container maxW={"1140px"} px={4}>
      <VStack spacing={8} alignItems={"center"}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length == 0 && (
          <Text fontSize="xl" fontWeight="bold" color="gray.500">
            No products found 😢{" "}
            <Link to="/create">
              <Text
                as={"span"}
                color="cyan.400"
                _hover={{ textDecoration: "underline" }}
              >
                Add New Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
