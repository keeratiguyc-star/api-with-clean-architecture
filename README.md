#API (NestJS Clean Architecture)

โปรเจกต์ตัวอย่างการสร้าง API สำหรับระบบจัดการสินค้า (Product Management) โดยใช้ **NestJS** พัฒนาภายใต้แนวคิด **Clean Architecture** และ **SOLID Principles** เพื่อแสดงถึงโครงสร้างโค้ดที่รองรับการขยายตัวและง่ายต่อการทำ Unit Test

## 🏗️ Architecture Design

โปรเจกต์นี้ไม่ได้เขียนแบบ MVC ทั่วไป แต่มีการแยก Layer ตามหลัก Clean Architecture เพื่อแยก Business Logic ออกจาก Framework (NestJS):

- **Domain Layer**: เก็บ Entities และ Interface (Repository Abstraction) ซึ่งเป็นหัวใจของระบบ
- **Use Case Layer**: บรรจุ Business Logic แยกตามกระบวนการทำงาน (เช่น การสร้างสินค้า, การลบสินค้า)
- **Infrastructure Layer**: ส่วนที่ติดต่อกับหน่วยความจำภายนอก (Data Store) ในที่นี้ใช้ In-Memory Repository
- **Presentation Layer**: ส่วนของ NestJS Controllers ที่ทำหน้าที่รับ Request และจัดการ DTO (Data Transfer Object)

## 🛠️ Tech Stack

- **Framework:** [NestJS](https://nestjs.com/)
- **Language:** TypeScript
- **Architecture:** Clean Architecture
- **Principles:** OOP, SOLID, Dependency Injection

## 📁 Project Structure

```text
src/
├── domain/                # Enterprise Business Rules (Entities, Interfaces)
│   ├── entities/          # Product Entity
│   └── repositories/      # Repository Interface (Contracts)
├── usecases/              # Application Business Rules (CRUD Logic)
├── infrastructure/        # External Frameworks (Repository Implementation)
│   └── repositories/      # In-Memory Database Logic
├── controllers/           # Interface Adapters (Controllers & DTOs)
└── main.ts                # Application Entry Point
