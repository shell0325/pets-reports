/*
  Warnings:

  - You are about to alter the column `time` on the `cares` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `category` on the `reviews` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Enum(EnumId(5))`.

*/
-- AlterTable
ALTER TABLE `cares` MODIFY `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `reviews` MODIFY `category` ENUM('Toy', 'PetFood', 'PetShop', 'AnimalHospital', 'Supplement', 'IndoorGoods', 'Bed', 'Collar', 'Wear', 'OutingGoods', 'CarrierBag', 'DriveGoods', 'DeodorantProducts', 'CareProducts', 'ToiletProducts', 'DisciplineProducts', 'NursingCareProducts', 'PetHouse', 'NameTag', 'MiscellaneousGoods') NOT NULL;
