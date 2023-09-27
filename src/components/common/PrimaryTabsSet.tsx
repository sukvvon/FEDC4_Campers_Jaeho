import { useState, ReactNode } from 'react';
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  TypographyProps,
  LayoutProps,
  TabsProps,
} from '@chakra-ui/react';

type PrimaryTabsSetProps = {
  tabTexts: string[];
  tabPanelChildrens: ReactNode[];
  tabsMinH?: LayoutProps['minH'];
  tabTextFontWeight?: TypographyProps['fontWeight'];
  tabTextFontSize?: TypographyProps['fontSize'];
  tabsIsFitted?: TabsProps['isFitted'];
  handleTabsChangeAdditionalFn?: (index: number) => void;
};

const PrimaryTabsSet = ({
  tabTexts,
  tabPanelChildrens,
  tabsMinH,
  tabTextFontWeight = 550,
  tabTextFontSize = 'lg',
  tabsIsFitted = false,
  handleTabsChangeAdditionalFn,
}: PrimaryTabsSetProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
    handleTabsChangeAdditionalFn && handleTabsChangeAdditionalFn(index);
  };

  return (
    <Tabs
      isFitted={tabsIsFitted}
      minH={tabsMinH}
      index={tabIndex}
      onChange={handleTabsChange}
    >
      <TabList borderBottom="none" justifyContent="center">
        {tabTexts.map((tabText, index) => (
          <Tab key={index} color="green.400">
            <Text
              fontSize={tabTextFontSize}
              fontWeight={tabTextFontWeight}
              color={tabIndex === index ? 'green.400' : 'blackAlpha.600'}
            >
              {tabText}
            </Text>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabPanelChildrens.map((tabPanelChildren, index) => (
          <TabPanel px={tabsIsFitted ? 0 : undefined} key={index}>
            {tabPanelChildren}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default PrimaryTabsSet;
