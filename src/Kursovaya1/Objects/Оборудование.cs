﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Оборудование.
    /// </summary>
    // *** Start programmer edit section *** (Оборудование CustomAttributes)

    // *** End programmer edit section *** (Оборудование CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОборудованиеE", new string[] {
            "Название as \'Название\'",
            "ИнвНомер as \'Инв номер\'",
            "ДатаДобавления as \'Дата добавления\'"})]
    [View("ОборудованиеL", new string[] {
            "Название as \'Название\'",
            "ИнвНомер as \'Инв номер\'",
            "ДатаДобавления as \'Дата добавления\'",
            "Тип.Название as \'Название\'",
            "Сотрудник.ФИО as \'ФИО\'"})]
    public class Оборудование : ICSSoft.STORMNET.DataObject
    {
        
        private string fНазвание;
        
        private string fИнвНомер;
        
        private string fДатаДобавления;
        
        private IIS.Kursovaya1.Тип fТип;
        
        private IIS.Kursovaya1.Пользователь fСотрудник;
        
        // *** Start programmer edit section *** (Оборудование CustomMembers)

        // *** End programmer edit section *** (Оборудование CustomMembers)

        
        /// <summary>
        /// ДатаДобавления.
        /// </summary>
        // *** Start programmer edit section *** (Оборудование.ДатаДобавления CustomAttributes)

        // *** End programmer edit section *** (Оборудование.ДатаДобавления CustomAttributes)
        [StrLen(255)]
        public virtual string ДатаДобавления
        {
            get
            {
                // *** Start programmer edit section *** (Оборудование.ДатаДобавления Get start)

                // *** End programmer edit section *** (Оборудование.ДатаДобавления Get start)
                string result = this.fДатаДобавления;
                // *** Start programmer edit section *** (Оборудование.ДатаДобавления Get end)

                // *** End programmer edit section *** (Оборудование.ДатаДобавления Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оборудование.ДатаДобавления Set start)

                // *** End programmer edit section *** (Оборудование.ДатаДобавления Set start)
                this.fДатаДобавления = value;
                // *** Start programmer edit section *** (Оборудование.ДатаДобавления Set end)

                // *** End programmer edit section *** (Оборудование.ДатаДобавления Set end)
            }
        }
        
        /// <summary>
        /// ИнвНомер.
        /// </summary>
        // *** Start programmer edit section *** (Оборудование.ИнвНомер CustomAttributes)

        // *** End programmer edit section *** (Оборудование.ИнвНомер CustomAttributes)
        [StrLen(255)]
        public virtual string ИнвНомер
        {
            get
            {
                // *** Start programmer edit section *** (Оборудование.ИнвНомер Get start)

                // *** End programmer edit section *** (Оборудование.ИнвНомер Get start)
                string result = this.fИнвНомер;
                // *** Start programmer edit section *** (Оборудование.ИнвНомер Get end)

                // *** End programmer edit section *** (Оборудование.ИнвНомер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оборудование.ИнвНомер Set start)

                // *** End programmer edit section *** (Оборудование.ИнвНомер Set start)
                this.fИнвНомер = value;
                // *** Start programmer edit section *** (Оборудование.ИнвНомер Set end)

                // *** End programmer edit section *** (Оборудование.ИнвНомер Set end)
            }
        }
        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Оборудование.Название CustomAttributes)

        // *** End programmer edit section *** (Оборудование.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Оборудование.Название Get start)

                // *** End programmer edit section *** (Оборудование.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Оборудование.Название Get end)

                // *** End programmer edit section *** (Оборудование.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оборудование.Название Set start)

                // *** End programmer edit section *** (Оборудование.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Оборудование.Название Set end)

                // *** End programmer edit section *** (Оборудование.Название Set end)
            }
        }
        
        /// <summary>
        /// Оборудование.
        /// </summary>
        // *** Start programmer edit section *** (Оборудование.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (Оборудование.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.Kursovaya1.Пользователь Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (Оборудование.Сотрудник Get start)

                // *** End programmer edit section *** (Оборудование.Сотрудник Get start)
                IIS.Kursovaya1.Пользователь result = this.fСотрудник;
                // *** Start programmer edit section *** (Оборудование.Сотрудник Get end)

                // *** End programmer edit section *** (Оборудование.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оборудование.Сотрудник Set start)

                // *** End programmer edit section *** (Оборудование.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (Оборудование.Сотрудник Set end)

                // *** End programmer edit section *** (Оборудование.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// Оборудование.
        /// </summary>
        // *** Start programmer edit section *** (Оборудование.Тип CustomAttributes)

        // *** End programmer edit section *** (Оборудование.Тип CustomAttributes)
        [PropertyStorage(new string[] {
                "Тип"})]
        [NotNull()]
        public virtual IIS.Kursovaya1.Тип Тип
        {
            get
            {
                // *** Start programmer edit section *** (Оборудование.Тип Get start)

                // *** End programmer edit section *** (Оборудование.Тип Get start)
                IIS.Kursovaya1.Тип result = this.fТип;
                // *** Start programmer edit section *** (Оборудование.Тип Get end)

                // *** End programmer edit section *** (Оборудование.Тип Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оборудование.Тип Set start)

                // *** End programmer edit section *** (Оборудование.Тип Set start)
                this.fТип = value;
                // *** Start programmer edit section *** (Оборудование.Тип Set end)

                // *** End programmer edit section *** (Оборудование.Тип Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОборудованиеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОборудованиеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОборудованиеE", typeof(IIS.Kursovaya1.Оборудование));
                }
            }
            
            /// <summary>
            /// "ОборудованиеL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОборудованиеL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОборудованиеL", typeof(IIS.Kursovaya1.Оборудование));
                }
            }
        }
    }
}
