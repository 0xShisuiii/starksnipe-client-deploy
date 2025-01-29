import { Box, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import { LuFolder, LuUser } from "react-icons/lu";
import SwapInterface from "./SwapInterface";
import { MdAttachMoney } from "react-icons/md";
import Image from "next/image";
import { generateRandomGradient } from "@/functions/helpers";
import { useRouter } from "next/router";
import TransactionTable from "./tables/TransactionTable";
import HoldersTable from "./tables/HoldersTable";
import ToptradersTable from "./tables/ToptradersTable";
import { holder, transaction } from "@/interfaces/interface";
import Link from "next/link";
const MemeCoinDashboard = ({ allTokens, currencies, prices }: any) => {
  const router = useRouter();
  const transactions:transaction[]=[
    {
    Date:'25th Dec',
    type:'buy',
    amount:690,
    user:'0x05970da1011e2f8dc15bc12fc1b0eb8e382300a334de06ad17d1404384b168e4',
    tx:'link'
  },
  {
    Date:'25th Dec',
    type:'buy',
    amount:690,
    user:'0x05970da1011e2f8dc15bc12fc1b0eb8e382300a334de06ad17d1404384b168e4',
    tx:'link'
  },
  {
    Date:'25th Dec',
    type:'buy',
    amount:690,
    user:'0x05970da1011e2f8dc15bc12fc1b0eb8e382300a334de06ad17d1404384b168e4',
    tx:'link'
  },
  {
    Date:'25th Dec',
    type:'buy',
    amount:690,
    user:'0x05970da1011e2f8dc15bc12fc1b0eb8e382300a334de06ad17d1404384b168e4',
    tx:'link'
  },
  {
    Date:'25th Dec',
    type:'buy',
    amount:690,
    user:'0x05970da1011e2f8dc15bc12fc1b0eb8e382300a334de06ad17d1404384b168e4',
    tx:'link'
  },
  {
    Date:'25th Dec',
    type:'buy',
    amount:690,
    user:'0x05970da1011e2f8dc15bc12fc1b0eb8e382300a334de06ad17d1404384b168e4',
    tx:'link'
  },
  {
    Date:'25th Dec',
    type:'buy',
    amount:690,
    user:'0x05970da1011e2f8dc15bc12fc1b0eb8e382300a334de06ad17d1404384b168e4',
    tx:'link'
  },
  {
    Date:'25th Dec',
    type:'buy',
    amount:690,
    user:'0x05970da1011e2f8dc15bc12fc1b0eb8e382300a334de06ad17d1404384b168e4',
    tx:'link'
  },
  {
    Date:'25th Dec',
    type:'buy',
    amount:690,
    user:'0x05970da1011e2f8dc15bc12fc1b0eb8e382300a334de06ad17d1404384b168e4',
    tx:'link'
  },
  {
    Date:'25th Dec',
    type:'buy',
    amount:690,
    user:'0x05970da1011e2f8dc15bc12fc1b0eb8e382300a334de06ad17d1404384b168e4',
    tx:'link'
  }
]

  const holders:holder[]=[
    {
      rank:1,
      address:'0x05970da1011e2f8dc15bc12fc1b0eb8e382300a334de06ad17d1404384b168e4',
      amount:900,
      percentage:8
    }
  ]
  return (
    <Box
      pt="6rem"
      width="100%"
      display="flex"
      alignItems="center"
      paddingLeft="3rem"
      paddingRight="3rem"
    >
      <Box
        display="flex"
        flexDirection={{ sm: "column", md: "row" }}
        gap="1rem"
        width="100%"
        bg="rgb(16 16 20)"
        marginBottom="5rem"
        padding="2rem"
        borderRadius="8px"
      >
        <Box
          width={{ sm: "100%", md: "70%" }}
          border="1px solid black"
          borderRadius="8px"
          padding="1rem"
          display="flex"
          flexDir="column"
        >
          <Box>
            <Box display="flex" gap="0.5rem">
              <Image src="https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e5aaa970-a998-47e8-bd43-4a3b56b87200/logo" alt="" height={30} width={30} />
              <Text fontSize="24px">Symbol</Text>
            </Box>
            <Box
              width="100%"
              justifyContent="space-between"
              display="flex"
              mt="1rem"
            >
              {router.query.address && (
                <Box>
                  {String(router.query?.address)?.substring(0, 5)}...
                  {String(router.query?.address)?.substring(
                    router.query?.address.length - 5,
                    router.query?.address.length
                  )}
                </Box>
              )}
              <Box>Market Cap: $4500</Box>
              <Box display="flex" alignItems="center" gap="0.4rem">
                <Text>Deployed By</Text>
                <Box
                  height="16px"
                  width="16px"
                  cursor="pointer"
                  bg={generateRandomGradient()}
                  borderRadius="200px"
                ></Box>
                {router.query?.address &&<Text textDecoration="underline" cursor="pointer">
                  <Link href="">
                    {String(router.query?.address)?.substring(0, 5)}...
                    {String(router.query?.address)?.substring(
                      router.query?.address.length - 5,
                      router.query?.address.length
                    )}
                  </Link>
                  </Text>}
              </Box>
              <Box>Created on 24th Dec</Box>
            </Box>
          </Box>
          <Tabs.Root defaultValue="transactions" mt="1rem">
            <Tabs.List rounded="13" gap="1rem">
              <Tabs.Trigger value="transactions">
              <MdAttachMoney/>
                Transactions
              </Tabs.Trigger>
              <Tabs.Trigger value="holders">
                <LuUser />
                Holders
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="holders">
              <HoldersTable holders={holders} />
            </Tabs.Content>
            <Tabs.Content value="transactions">
              <TransactionTable transactions={transactions} />
            </Tabs.Content>
          </Tabs.Root>
        </Box>
        <Box
          width={{ sm: "100%", md: "30%" }}
          border="1px solid black"
          borderRadius="8px"
          padding="1rem"
        >
          <SwapInterface
            allTokens={allTokens}
            currencies={currencies}
            prices={prices}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MemeCoinDashboard;
