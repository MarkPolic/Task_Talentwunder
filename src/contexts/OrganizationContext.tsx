import React, { createContext, useContext, useState, ReactNode } from "react";

interface OrganizationContextType {
  selectedOrg: number | undefined;
  setSelectedOrg: (orgId: number) => void;
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(
  undefined
);

interface OrganizationProviderProps {
  children: ReactNode;
}

export const OrganizationProvider: React.FC<OrganizationProviderProps> = ({
  children,
}) => {
  const [selectedOrg, setSelectedOrg] = useState<number | undefined>(undefined);

  return (
    <OrganizationContext.Provider value={{ selectedOrg, setSelectedOrg }}>
      {children}
    </OrganizationContext.Provider>
  );
};

export const useOrganizationContext = (): OrganizationContextType => {
  const context = useContext(OrganizationContext);
  if (!context) {
    throw new Error(
      "useOrganizationContext must be used within a OrganizationProvider"
    );
  }
  return context;
};
