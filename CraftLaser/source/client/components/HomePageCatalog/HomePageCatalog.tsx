import React, { useEffect, useState } from "react";
import './HomePageCatalog.css'
import { SectionTitle } from "../ui/SectionTitle/SectionTitle";
import { FormInput } from "../ui/FormInput/FormInput";
import { CustomCheckboxInput } from "../ui/CustomCheckboxInput/CustomCheckboxInput";
import { CatalogList } from "../CatalogList/CatalogList";
import { Filter } from "../../shared/types/filter.types";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import Cookies from "js-cookie";
import config from '../../../config/config.json'
import { Material } from "../../shared/types/material.types";

export const HomePageCatalog = () => {

  const [filters, setFilters] = useState<Filter[] | null>(null)
  const [materials, setMaterials] = useState<Material[] | null>(null)
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const userSess = Cookies.get('user_sess')

  useEffect(() => {
    const fetchFilters = async () => {
      const response = await api(APICOMMAND.selectFilters, {}, userSess, config)
      const filtersData = await response.json()
      setFilters(filtersData.data)
      const responseMat = await api(APICOMMAND.selectMaterial, {}, userSess, config)
      const materialsData = await responseMat.json()
      setMaterials(materialsData.data)
    }
    fetchFilters()
  }, [])

  const handleMaterialChange = (materialId: string) => {
    setSelectedMaterials(prev => 
      prev.includes(materialId)
      ? prev.filter(name => name !== materialId)
      : [...prev, materialId]
    )
  }

  console.log(selectedMaterials)

  return (
    <section>
      <SectionTitle title="Каталог" text="Catalog" marginB="40px" />
      <div className="catalog_wrapper_all">
        <div className="catalog_wrapper_filters">
          <h3 className="filters_title">
            Фильтры
          </h3>
          <ul className="all_filters_list">
            {filters && materials && filters.map((filter, index) => {
              const filteredMaterials = materials.filter(item => item.id_filter === filter.id)
              return (
                <li className="all_filters_item" key={filter.id}>
                  <h4 className="subcategory_filters_title">{filter.name_filters}</h4>
                  <ul className="subcategory_filters_list">
                    {filteredMaterials && filteredMaterials.map((material) => (
                      <li key={material.id}>
                        <CustomCheckboxInput text={material.name_material} onChange={() => handleMaterialChange(material.id)}/>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="catalog_wrapper_list_products">
          <CatalogList selectedMaterials={selectedMaterials}/>
        </div>
      </div>
    </section>
  )
}