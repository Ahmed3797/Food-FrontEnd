import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import OrderItem from "./OrderItem";
import { FiChevronDown } from "react-icons/fi";

const MyAccordion = ({ data, name }) => {
  return (
    <Accordion
      allowZeroExpanded
      className="border border-gray-200 rounded-lg shadow-lg bg-white"
    >
      <AccordionItem className="border-b border-gray-200">
        <AccordionItemHeading className="w-full text-left  bg-[#4F8D9C] hover:bg-[#EFEFEF] flex justify-between items-center transition-colors duration-200">
          <AccordionItemButton className="w-full text-left p-4 bg-[#4F8D9C] hover:bg-[#EFEFEF] flex justify-between items-center transition-colors duration-200">
            <span className="text-lg font-medium text-gray-800">{name}</span>
            <FiChevronDown
              className="text-gray-600 transition-transform duration-200"
              size={20}
              color="white"
            />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="p-4 bg-white">
          {data.length > 0 ? (
            <table className="min-w-full bg-white ">
              <tbody>
                {data.map((order, index) => (
                  <OrderItem key={index} item={order} />
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center font-semibold text-blue-500 text-[20px]">
              No items
            </p>
          )}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordion;
