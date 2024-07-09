import * as svgsrounded from "./Icons/Round";

export {
  useArray,
  useAsync,
  useDebounce,
  useEventListener,
  useFetch,
  useFirstRender,
  useLocalStorage,
  useLocalStorage2,
  useOnScreen,
  usePrevious,
  useScript,
  useStateWithHistory,
  useTimeout,
  useToggle,
  useUpdateEffect,
  useWindowSize,
  UseFilteredContent,
} from "./hooks";

import { Seo, SeoProvider, SeoData } from "./Seo";

export { Seo, SeoProvider, SeoData };
export { default as Accordion } from "./components/Accordion/Accordion";
export { default as Alert } from "./components/Alert/Alert";
export { default as Avatar } from "./components/Avatar/Avatar";
export { default as Button } from "./components/Button/Button";
export { default as Badge } from "./components/Badge/Badge";
export { default as Banner } from "./components/Banner/Banner";
export { default as BasicCard } from "./components/Cards/BasicCard/BasicCard";
export { default as Box } from "./components/Box/Box";
export { CustomBreadcrumb, DynamicBreadCrumb } from "./components/BreadCrumb";
export { default as CloseButton } from "./components/CloseButton/CloseButton";
export { default as Code } from "./components/Code/Code";
export { default as ColorPicker } from "./components/ColorPicker/ColorPicker";
export { default as ContentScrollable } from "./components/ContentScrollable/ContentScrollable";
export { default as Divider } from "./components/Divider/Divider";
export { default as Drawer } from "./components/Drawer/Drawer";
export { default as Dropdown } from "./components/Dropdown/Dropdown";
export { default as EmojiListRenderer } from "./components/EmojiListRenderer/EmojiListRenderer";
export { default as Fieldset } from "./components/Fieldset/Fieldset";
export { default as Figure } from "./components/Figure/Figure";
export { default as FullScreenToggle } from "./components/FullScreenToggle/FullScreenToggle";
export { default as GridBackground } from "./components/GridBackground/GridBackground";
export { default as GridLines } from "./components/GridBackground/GridLines";
export { Heading, Paragraph } from "./components/Typography";
export { default as JsonViewer } from "./components/JsonViewer/JsonViewer";
export { default as Link } from "./components/Link/Link";
export { default as LinkBar } from "./components/LinkBar/LinkBar";
export { default as LinkButton } from "./components/LinkButton/LinkButton";
export { ListGroups, UnorderedList, OrderedList } from "./components/Lists";
export { default as Modal } from "./components/Modal/Modal";
export { default as NonIdealState } from "./components/NonIdealState/NonIdealState";
export { default as PreviewCode } from "./components/PreviewCode/PreviewCode";
export { default as Range } from "./components/Range/Range";
export { default as SideBar } from "./components/SideBar/SideBar";
export { default as SplitButton } from "./components/SplitButton/SplitButton";
export { default as Stack } from "./components/Stack/Stack";
export { default as Spinner } from "./components/Spinner/Spinner";
export { default as Table } from "./components/Table/Table";
export { default as Tag } from "./components/Tag/Tag";
export { default as TextArea } from "./components/TextArea/TextArea";
export { default as TextHighlighter } from "./components/TextHighlighter/TextHighlighter";
export { default as Tooltip } from "./components/Tooltip/Tooltip";
export { default as TreeView } from "./components/TreeView/TreeView";
export { default as View } from "./components/View/View";
export { default as EditableTable } from "./components/EditableTable/EditableTable";
export { default as Ripple } from "./components/Ripple/Ripple";
export { default as MiniCard } from "./components/MiniCard/MiniCard";
export { default as Pagination } from "./components/Pagination/Pagination";
export { default as SearchBar } from "./components/SearchBar/SearchBar";
export { default as Content } from "./components/Content/Content";
export { default as Popover } from "./components/Popover/Popover";
export { ToastContainer, showToast } from "./components/Toast/ToastContainer";
export { default as Form } from "./components/Form/Form";
export { Audio, video } from "./components/Media";
export { Tab, Tabs } from "./components/Tabs/Tabs";
export { default as TabList } from "./components/TabList/TabList";
export { default as SectionHeader } from "./components/SectionHeader/SectionHeader";
export { default as CheckboxCard } from "./components/CheckboxCard/CheckboxCard";
export { default as RadioCard } from "./components/RadioCard/RadioCard";
export { default as ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

export { useDarkMode, DarkModeProvider } from "./components/DarkModeProvider/DarkModeProvider";
export { Provider, useStateValue } from "./stateManagment/stateManagment";

const roundExports = Object.entries(svgsrounded).reduce((acc, [key, Svg]) => {
  acc[Svg.displayName] = Svg;
  return acc;
}, {});

export const RoundedIcons = roundExports;
