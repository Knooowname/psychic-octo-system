import React, { FC } from "react";
import './AdminAllFilters.css'
import { Button } from "../ui/Button/Button";
import { Filter } from "../../shared/types/filter.types";
import { Material } from "../../shared/types/material.types";
import { AdminFilterCard } from "../ui/AdminFilterCard/AdminFilterCard";

interface AdminAllFiltersProps {
  filters: Filter[],
  materials: Material[],
  openAddFilter: () => void,
  openAddMaterial: () => void,
}

export const AdminAllFilters: FC<AdminAllFiltersProps> = ({ filters, materials, openAddFilter, openAddMaterial }) => {
  
  // material это подфильтры, а filters это фильтры
  
  return (
    <section>
      <div className="admin_all_filters_wrapper_title_and_btns">
        <h2 className="admin_section_title title">
          Фильтры и подфильтры
        </h2>
        <div className="admin_all_filters_wrapper_btns">
          <Button fontSize="16px" fontWeight="400" onClick={() => openAddFilter()}>
            Добавить фильтр
          </Button>
          <Button fontSize="16px" fontWeight="400" onClick={() => openAddMaterial()}>
            Добавить подфильтр
          </Button>
        </div>
      </div>
      <ul className="admin_all_filters_list">
          {filters?.map((item) => {

            let filteredMaterials = materials?.filter(itemMat => itemMat.id_filter === item.id)

            return (
              <li className="admin_all_filters_list" key={item.id}>
                <AdminFilterCard filterName={item?.name_filters} subFilters={filteredMaterials}/>
              </li>
            )
          })}
        </ul>
    </section>
  )
}